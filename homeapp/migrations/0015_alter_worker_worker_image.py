# Generated by Django 4.2.2 on 2023-08-31 22:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homeapp', '0014_worker'),
    ]

    operations = [
        migrations.AlterField(
            model_name='worker',
            name='worker_image',
            field=models.ImageField(default='default_image.jpg', upload_to='workers_images/'),
        ),
    ]