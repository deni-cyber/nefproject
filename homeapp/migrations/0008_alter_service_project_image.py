# Generated by Django 4.2.2 on 2023-07-23 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homeapp', '0007_service'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='project_image',
            field=models.ImageField(default='default_image.png', upload_to='service_images/'),
        ),
    ]
