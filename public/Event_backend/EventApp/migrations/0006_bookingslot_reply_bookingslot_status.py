# Generated by Django 4.2.5 on 2023-11-01 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EventApp', '0005_rename_typeofevent_addevent_events'),
    ]

    operations = [
        migrations.AddField(
            model_name='bookingslot',
            name='reply',
            field=models.CharField(blank=True, default='no reply', max_length=30),
        ),
        migrations.AddField(
            model_name='bookingslot',
            name='status',
            field=models.CharField(default=1, max_length=30),
            preserve_default=False,
        ),
    ]