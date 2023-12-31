# Generated by Django 4.2.2 on 2023-07-29 06:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homeapp', '0011_rename_products_product'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='product_image',
            field=models.ImageField(default='default_product_image.jpg', upload_to='products_images/'),
        ),
        migrations.AlterField(
            model_name='service',
            name='service_image',
            field=models.ImageField(default='default_service_image.jpg', upload_to='service_images/'),
        ),
    ]
