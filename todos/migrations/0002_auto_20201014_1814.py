# Generated by Django 3.1.2 on 2020-10-14 18:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todos', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='body',
            new_name='checked',
        ),
    ]
