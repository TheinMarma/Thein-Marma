from bs4 import BeautifulSoup, Comment
from pathlib import Path
from urllib.request import urlopen
from urllib.parse import urljoin, urlparse
import re, hashlib
ROOT=Path('dist'); BASE='https://www.piyushgarg.dev'
assets={}
def download(url):
 url=urljoin(BASE,url)
 if url in assets:return assets[url]
 ext=Path(urlparse(url).path).suffix or '.bin'
 name='/assets/'+hashlib.sha256(url.encode()).hexdigest()[:14]+ext
 p=ROOT/name.lstrip('/');p.parent.mkdir(parents=True,exist_ok=True)
 data=urlopen(url).read()
 if ext=='.css':
  css=data.decode()
  css=re.sub(r'url\(([^)]+)\)',lambda m:'url('+download(urljoin(url,m[1].strip('\"\'')))+')',css)
  data=css.encode()
 p.write_bytes(data);assets[url]=name;return name
for page in ['index','courses','gadgets','guestbook']:
 src='/tmp/piyush-reference.html' if page=='index' else '/tmp/piyush-'+page+'.html'
 s=BeautifulSoup(Path(src).read_text(),'html.parser')
 # Resolve the streamed server-rendered sections into ordinary static HTML.
 for hidden in list(s.select('div[id^="S:"]')):
  anchor=s.find('template',id=hidden['id'].replace('S:','B:'))
  if anchor:
   node=anchor.next_sibling
   while node and not (isinstance(node,Comment) and str(node)=='/$'):
    nxt=node.next_sibling;node.extract();node=nxt
   for child in list(hidden.contents):anchor.insert_before(child.extract())
   anchor.decompose()
  hidden.decompose()
 for tag in list(s.select('script,template')):tag.decompose()
 for c in s.find_all(string=lambda x:isinstance(x,Comment)):c.extract()
 for link in list(s.select('link')):
  rel=link.get('rel',[])
  if 'stylesheet' in rel or 'icon' in rel or 'apple-touch-icon' in rel or (link.get('as')=='font'):
   link['href']=download(link['href'])
  else:link.decompose()
 for img in s.select('img'):
  original=img['src']
  if '/_next/image?' in original:
   from urllib.parse import parse_qs
   original=parse_qs(urlparse(original).query)['url'][0]
  img['src']=download(original)
  for k in ['srcset','data-nimg']:img.attrs.pop(k,None)
 for meta in list(s.select('meta')):
  if meta.get('property','').startswith('og:') or meta.get('name','').startswith('twitter:') or meta.get('name') in ['googlebot','author','creator','publisher']:meta.decompose()
 robots=s.find('meta',attrs={'name':'robots'})
 if robots:robots['content']='noindex, nofollow'
 for a in s.select('a[href]'):
  if a['href'] in ['/courses','/gadgets','/guestbook']:a['href']+='/'
  if a['href']==('/' if page=='index' else '/'+page+'/'):a['aria-current']='page'
 # Provide native tooltips on the archived contribution calendar.
 for cell in s.select('[data-state]'):cell.attrs.pop('data-state',None)
 if page=='guestbook':
  s.main.find('p').string='Leave a message. This recreation saves messages in your browser only.'
  f=s.main.find('form');f.clear();f.attrs={'id':'guestbook-form','class':'flex flex-col gap-3'}
  fragment=BeautifulSoup('''<label class="font-mono text-sm text-zinc-500" for="guest-name">Name</label><input id="guest-name" name="name" required maxlength="60" autocomplete="name" class="border border-zinc-200 px-4 py-2" placeholder="Your name"><label class="font-mono text-sm text-zinc-500" for="guest-message">Message</label><textarea id="guest-message" name="message" required maxlength="1000" rows="3" class="border border-zinc-200 px-4 py-2" placeholder="Say hello…"></textarea><button class="border border-zinc-200 px-4 py-2 font-mono text-sm text-foreground hover:border-zinc-400" type="submit">leave a message ↗</button><p id="message-status" role="status" class="font-mono text-xs text-zinc-500"></p><div id="local-messages"></div>''','html.parser')
  f.extend(list(fragment.contents))
 style=s.new_tag('link',rel='stylesheet',href='/enhancements.css');s.head.append(style)
 script=s.new_tag('script',src='/app.js',defer='');s.body.append(script)
 dest=ROOT/'index.html' if page=='index' else ROOT/page/'index.html';dest.parent.mkdir(exist_ok=True,parents=True);dest.write_text(str(s))
 print(page, len(str(s)), 'bytes')
print('Downloaded',len(assets),'assets')
