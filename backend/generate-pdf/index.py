"""
Business: Генерирует PDF-памятку для выпускников с информацией об учебе в Усть-Катаве
Args: event - dict с httpMethod, body, queryStringParameters
      context - объект с атрибутами: request_id, function_name
Returns: HTTP response с PDF файлом в base64
"""

import json
from typing import Dict, Any
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.colors import HexColor
import io
import base64


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'GET':
        return {
            'statusCode': 405,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    buffer = io.BytesIO()
    pdf = canvas.Canvas(buffer, pagesize=A4)
    width, height = A4
    
    # Цвета
    primary = HexColor('#2563EB')
    secondary = HexColor('#10B981')
    accent = HexColor('#F97316')
    gray = HexColor('#6B7280')
    
    y = height - 2*cm
    
    # Заголовок
    pdf.setFillColor(primary)
    pdf.setFont('Helvetica-Bold', 24)
    pdf.drawCentredString(width/2, y, 'Памятка выпускника')
    y -= 0.7*cm
    
    pdf.setFont('Helvetica-Bold', 18)
    pdf.drawCentredString(width/2, y, 'Усть-Катав')
    y -= 1.5*cm
    
    # Подзаголовок
    pdf.setFillColor(gray)
    pdf.setFont('Helvetica', 12)
    pdf.drawCentredString(width/2, y, 'Почему остаться — это уверенный старт в будущее')
    y -= 2*cm
    
    # Преимущества
    advantages = [
        ('💰 Финансовая свобода', 
         'Низкие затраты на обучение и проживание. Трать деньги на',
         'саморазвитие, а не на выживание в большом городе.'),
        
        ('👨‍🏫 Персональный подход',
         'Небольшие группы и доступность преподавателей.',
         'Здесь знают твое имя и помогают раскрыть потенциал.'),
        
        ('🚀 Практика с первого курса',
         'УКВЗ и другие предприятия — твоя производственная база.',
         'Стажировки и трудоустройство рядом с домом.'),
        
        ('🌳 Жизнь в ритме ЭКО',
         'Чистый воздух, река Юрюзань, леса и горы.',
         'Спорт и отдых на природе в 15 минутах от дома.')
    ]
    
    for i, (title, line1, line2) in enumerate(advantages):
        color = [primary, secondary, accent, secondary][i]
        
        pdf.setFillColor(color)
        pdf.setFont('Helvetica-Bold', 14)
        pdf.drawString(3*cm, y, title)
        y -= 0.6*cm
        
        pdf.setFillColor(gray)
        pdf.setFont('Helvetica', 10)
        pdf.drawString(3*cm, y, line1)
        y -= 0.5*cm
        pdf.drawString(3*cm, y, line2)
        y -= 1.2*cm
    
    # Шаги к успеху
    y -= 0.5*cm
    pdf.setFillColor(primary)
    pdf.setFont('Helvetica-Bold', 16)
    pdf.drawString(3*cm, y, 'Как построить карьеру в Усть-Катаве:')
    y -= 1*cm
    
    steps = [
        '1. Выбери направление — филиал ЮУрГУ, колледжи, центры профподготовки',
        '2. Получи поддержку — гранты, стипендии, программы для молодежи',
        '3. Найди единомышленников — молодежная палата, IT-сообщество, волонтеры',
        '4. Стажируйся и развивайся — практика на местных предприятиях'
    ]
    
    pdf.setFillColor(gray)
    pdf.setFont('Helvetica', 11)
    for step in steps:
        pdf.drawString(3*cm, y, step)
        y -= 0.7*cm
    
    # Развенчание мифов
    y -= 0.8*cm
    pdf.setFillColor(accent)
    pdf.setFont('Helvetica-Bold', 16)
    pdf.drawString(3*cm, y, 'Развенчиваем мифы:')
    y -= 1*cm
    
    myths = [
        ('❌ "В малом городе нет перспектив"',
         '✅ Дефицит кадров = возможности для молодых специалистов'),
        
        ('❌ "Все успешные уезжают"',
         '✅ Многие возвращаются с опытом и строят бизнес здесь')
    ]
    
    pdf.setFont('Helvetica', 10)
    for myth, truth in myths:
        pdf.setFillColor(HexColor('#EF4444'))
        pdf.drawString(3*cm, y, myth)
        y -= 0.6*cm
        pdf.setFillColor(secondary)
        pdf.drawString(3*cm, y, truth)
        y -= 1*cm
    
    # Футер
    y = 2*cm
    pdf.setFillColor(gray)
    pdf.setFont('Helvetica', 9)
    pdf.drawCentredString(width/2, y, 'Администрация Усть-Катавского городского округа')
    y -= 0.5*cm
    pdf.drawCentredString(width/2, y, '📧 info@ust-katav.ru | 📞 +7 (35167) 2-15-35')
    
    pdf.save()
    
    pdf_bytes = buffer.getvalue()
    buffer.close()
    
    pdf_base64 = base64.b64encode(pdf_bytes).decode('utf-8')
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="pamyatka-vypusknika.pdf"',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': True,
        'body': pdf_base64
    }
