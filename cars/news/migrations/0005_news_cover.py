# Generated by Django 3.1.5 on 2021-07-06 10:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0004_commentnews'),
    ]

    operations = [
        migrations.AddField(
            model_name='news',
            name='cover',
            field=models.ImageField(default='', upload_to='images/'),
        ),
    ]