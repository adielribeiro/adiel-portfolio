from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT=Path(__file__).resolve().parent.parent
OUT=ROOT/'public'/'Curriculo_Adiel_Ribeiro_do_Vale_Junior.pdf'
for name, filename in [('Inter','DejaVuSans.ttf'),('Inter-Bold','DejaVuSans-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name,'/usr/share/fonts/truetype/dejavu/'+filename))
pdfmetrics.registerFontFamily('Inter',normal='Inter',bold='Inter-Bold')
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameCV',fontName='Inter-Bold',fontSize=20,leading=26,textColor=colors.HexColor('#172333'),spaceAfter=7))
styles.add(ParagraphStyle(name='SubCV',fontName='Inter-Bold',fontSize=10,leading=15,textColor=colors.HexColor('#294d44'),spaceAfter=9))
styles.add(ParagraphStyle(name='BodyCV',fontName='Inter',fontSize=9,leading=14,textColor=colors.HexColor('#303743'),spaceAfter=7))
styles.add(ParagraphStyle(name='SmallCV',fontName='Inter',fontSize=8,leading=12,textColor=colors.HexColor('#4b5563'),spaceAfter=8))
styles.add(ParagraphStyle(name='SectionCV',fontName='Inter-Bold',fontSize=10,leading=15,textColor=colors.HexColor('#294d44'),spaceBefore=13,spaceAfter=8))
styles.add(ParagraphStyle(name='RoleCV',fontName='Inter-Bold',fontSize=9,leading=14,textColor=colors.HexColor('#172333'),spaceAfter=3))
styles.add(ParagraphStyle(name='BulletCV',fontName='Inter',fontSize=9,leading=14,textColor=colors.HexColor('#303743'),leftIndent=10,firstLineIndent=-8,spaceAfter=4))
flow=[]
def p(text,style='BodyCV'): flow.append(Paragraph(text,styles[style]))
def bullet(text): p('- '+text,'BulletCV')
def section(text): p(text.upper(),'SectionCV')
def role(title,company,period,desc):
    flow.append(KeepTogether([Paragraph(f'{title} | {company}',styles['RoleCV']),Paragraph(period,styles['SmallCV']),Paragraph(desc,styles['BodyCV'])]))
p('ADIEL RIBEIRO DO VALE JUNIOR','NameCV')
p('DESENVOLVEDOR BACK-END .NET | APIs &amp; INTEGRAÇÕES','SubCV')
p('Guapiaçu / Região de São José do Rio Preto - SP<br/>+55 17 98168-6253 | <link href="mailto:adiel.rv@gmail.com">adiel.rv@gmail.com</link><br/><link href="https://github.com/adielribeiro">github.com/adielribeiro</link> | <link href="https://adielribeiro.github.io/adiel-portfolio/">Portfólio</link> | <link href="https://www.linkedin.com/in/adiel-ribeiro-do-vale-j%C3%BAnior-b5094574/">LinkedIn</link>','SmallCV')
section('Resumo profissional')
p('Desenvolvedor back-end com atuação em C#/.NET, APIs REST/SOAP, SQL e integração de sistemas corporativos. Experiência com SAP Business One, SoftExpert, Sênior e automações com n8n. Trajetória em suporte e infraestrutura, com visão do processo completo: levantamento de requisitos, desenvolvimento, implantação e manutenção. Atuação no Grupo Essere, desenvolvendo soluções para diferentes empresas do grupo.')
section('Competências técnicas')
p('<b>Back-end:</b> C#, .NET 6/8, ASP.NET Core, APIs REST, SOAP, Entity Framework / EF Core e ADO.NET.<br/><b>Integrações:</b> SAP Business One, Service Layer, SoftExpert, Sênior, n8n, workflows e assinatura digital.<br/><b>Dados:</b> SQL Server, MySQL, modelagem, consultas e rotinas de integração.<br/><b>Web e ferramentas:</b> React, JavaScript, TypeScript, Node.js/Express, HTML, CSS, PHP, Git e GitHub.')
section('Experiência profissional')
p('Desenvolvedor Back-end | Grupo Essere','RoleCV')
p('jun/2021 - atual | Kimberlit, Bionat e Loyder','SmallCV')
for t in [
'Desenvolvimento e manutenção de APIs e Web Services em C#/.NET, com acesso a dados via Entity Framework e SQL.',
'Integrações com SAP Business One, SoftExpert e Sênior; automação de processos e orquestração de fluxos com n8n.',
'Entrega de automação de RFQ: envio de cotações, formulário do fornecedor e gravação no SAP, com validações de prazo, moeda, CNPJ e controle de duplicidade.',
'Rotinas de envio de duplicatas, geração de PDF, acompanhamento de assinatura digital e histórico de integração.',
'Levantamento de requisitos com as áreas usuárias, desenvolvimento de workflows e formulários e implantação de módulos Kanban e Documentos com ClickSign.'
]: bullet(t)
role('Tecnologia da Informação','ACIRP Rio Preto','fev/2021 - jun/2021','Suporte a usuários e sistemas, administração de acessos e desenvolvimento web com PHP, HTML e JavaScript. Versionamento com GitHub.')
role('Facilitador de TI','Aurora Alimentos','jan/2017 - dez/2020','Suporte a usuários, infraestrutura de rede, telefonia e impressoras. Controle de ativos de software e apoio à operação em ambiente Windows/Office.')
flow.append(PageBreak())
p('ADIEL RIBEIRO DO VALE JUNIOR','SubCV')
section('Experiência profissional · continuação')
role('Técnico em Informática','Rework','jan/2015 - jan/2017','Suporte aos usuários, manutenção de impressoras, infraestrutura e redes.')
role('Assistente de Tecnologia da Informação','Móveis Província','abr/2008 - mai/2015','Manutenção de computadores, instalação e configuração de servidores Linux e Windows. Apoio à implantação do SAP Business One.')
section('Projetos selecionados')
for title,desc in [
('Automação de RFQ | SAP Business One + n8n','Integração do processo de cotação para três empresas do Grupo Essere. Formulário web, notificações, tratamento de recusa e validações de dados. Projeto corporativo entregue em 2026.'),
('Envio de duplicatas | .NET + SAP B1 + SoftExpert','Automação de documentos financeiros com geração de PDF, integração SOAP, regras de envio, histórico e acompanhamento de assinatura digital. Projeto corporativo.'),
('SAPCurrencyRate.API | .NET 6','Serviço de consulta de cotação PTAX do Banco Central e atualização de taxas no SAP Business One, com horário de corte, registro de consulta e idempotência. Projeto corporativo.'),
('Orça Feito | projeto autoral','Produto para elaboração e organização de orçamentos comerciais, com interface React e API. Repositórios: github.com/adielribeiro/gerador-orcamentos e github.com/adielribeiro/orcamentos-api.'),
('Sequência | React + Node.js + Socket.IO','Protótipo de jogo de cartas multiplayer com comunicação em tempo real, salas, regras no servidor e adversários controlados pelo computador. Repositório: github.com/adielribeiro/sequencia-card-game.'),
('Partitura Web | React + .NET 8','MVP em desenvolvimento de editor de partituras, com edição de notas e compassos, múltiplas claves, organização de instrumentos e exportação em PDF.')
]:
    flow.append(KeepTogether([Paragraph(title,styles['RoleCV']),Paragraph(desc,styles['BodyCV']),Spacer(1,4)]))
section('Formação acadêmica')
p('<b>Engenharia da Computação - UNORP:</b> curso não concluído.<br/><b>Gestão de TI - UNIP:</b> em andamento.<br/><b>Matemática - UNIVESP:</b> em andamento.')
section('Idiomas e desenvolvimento')
p('Português nativo. Inglês básico/técnico.<br/>Em aprofundamento: SOLID, TDD, CQRS, Docker, cloud e mensageria.')
def footer(c,doc):
    c.setStrokeColor(colors.HexColor('#d8dedb')); c.line(42,38,553,38)
    c.setFont('Inter',7);c.setFillColor(colors.HexColor('#68716d'))
    c.drawString(42,25,'Atualizado em setembro/2026 | adiel.rv@gmail.com')
    c.drawRightString(553,25,f'{doc.page}')
doc=SimpleDocTemplate(str(OUT),pagesize=(595.28,841.89),rightMargin=42,leftMargin=42,topMargin=35,bottomMargin=50,title='Currículo - Adiel Ribeiro do Vale Junior',author='Adiel Ribeiro do Vale Junior')
doc.build(flow,onFirstPage=footer,onLaterPages=footer)
print(OUT)
