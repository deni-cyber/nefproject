# Generated by Django 4.2.2 on 2023-07-11 09:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homeapp', '0005_alter_project_project_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='project_image',
            field=models.ImageField(default='default_image.png', upload_to='project_images/'),
        ),
    ]
