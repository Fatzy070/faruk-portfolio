"""Generate the public CV from the same verified content as the portfolio.
Export content first using the command documented in README.md.
"""
import json
import sys
from xml.sax.saxutils import escape
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
pdfmetrics.registerFont(TTFont("CVSans", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("CVSansBold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.pagesizes import A4

with open(sys.argv[1], encoding='utf-8') as source:
    data = json.load(source)
output = sys.argv[2] if len(sys.argv) > 2 else 'public/ogunsola-faruk-cv.pdf'
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameCustom', fontName='CVSansBold', fontSize=25, leading=30, textColor=colors.HexColor('#232620'), spaceAfter=5))
styles.add(ParagraphStyle(name='RoleCustom', fontName='CVSans', fontSize=11, leading=16, textColor=colors.HexColor('#a83d28'), spaceAfter=9))
styles.add(ParagraphStyle(name='SectionCustom', fontName='CVSansBold', fontSize=10, leading=14, textColor=colors.HexColor('#a83d28'), spaceBefore=10, spaceAfter=5))
styles.add(ParagraphStyle(name='TitleCustom', fontName='CVSansBold', fontSize=10, leading=14, spaceBefore=7, spaceAfter=3))
styles.add(ParagraphStyle(name='CopyCustom', fontName='CVSans', fontSize=8.2, leading=11.5, textColor=colors.HexColor('#343a32'), spaceAfter=4))
styles.add(ParagraphStyle(name='SmallCustom', fontName='CVSans', fontSize=7.5, leading=10, textColor=colors.HexColor('#5c6357'), spaceAfter=4))

def safe(value):
    return escape(value.replace('—','-').replace('–','-').replace('’', "'").replace('“','"').replace('”','"'))
def p(text, style='CopyCustom'):
    return Paragraph(safe(text), styles[style])
flow = [p(data['profile']['name'], 'NameCustom'),p(data['profile']['role'],'RoleCustom')]
flow += [Paragraph('<link href="mailto:ogunsolafark8@gmail.com">ogunsolafark8@gmail.com</link>  |  <link href="https://ogunsolafaruk.vercel.app">ogunsolafaruk.vercel.app</link>  |  <link href="https://github.com/Fatzy070">github.com/Fatzy070</link>',styles['SmallCustom']), Spacer(1,8),HRFlowable(width='100%',color=colors.HexColor('#cbd1c2'),thickness=.6)]
flow += [p('PROFILE','SectionCustom'),p('Software developer building complete products across web and mobile, from React and React Native interfaces to backend APIs, authentication, payments, AI integrations, document processing and production deployment.')]
flow.append(p('EXPERIENCE','SectionCustom'))
for item in data['experience']:
    flow += [p(item['role']+' | '+item['company'],'TitleCustom'), p(item['date'],'SmallCustom'),p(item['description'])]
    for line in item['contributions']: flow.append(p('- '+line))
flow.append(p('SELECTED PRODUCTS','SectionCustom'))
for item in data['projects']:
    flow += [p(item['name']+' | '+item['category'],'TitleCustom'), p(item['description']),Paragraph('<link href="'+item['liveUrl']+'">'+item['liveUrl']+'</link>',styles['SmallCustom'])]
flow += [p('Nexus | Web and React Native','TitleCustom'),p('Social product with a Next.js web application and an Expo / React Native mobile app. Mobile implementation includes native navigation, secure token storage, chat, voice recording and push-notification handling.'),Paragraph('<link href="https://github.com/Fatzy070/social-mobile">github.com/Fatzy070/social-mobile</link>',styles['SmallCustom'])]
flow.append(p('TECHNOLOGIES','SectionCustom'))
for item in data['capabilities']: flow.append(p(item['title']+': '+', '.join(item['tools'])))
flow += [p('EDUCATION','SectionCustom'),p(data['education']['title']+' | '+data['education']['institution']+' | '+data['education']['year'])]
doc = SimpleDocTemplate(output, pagesize=A4, rightMargin=43,leftMargin=43,topMargin=28,bottomMargin=24,title='Ogunsola Faruk - Software Developer, Web & Mobile',author='Ogunsola Faruk')
doc.build(flow)
print(output)
