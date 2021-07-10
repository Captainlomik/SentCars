from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Person_information(models.Model):
    person = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    phone = models.CharField(blank=True, null=True, max_length=20)
    adress = models.TextField(blank=True, null=True,
                              max_length=300, help_text='Адрес регистрации')
    pasport_info = models.TextField(
        blank=True, null=True, max_length=50, help_text='Паспортные данные')

    def __str__(self):
        return self.phone


class Person_auto(models.Model):

    GEAR_CASE = (
        ("1", "автомат"),
        ("2", "механика"),
    )

    GEAR = (
        ("1", "передний"),
        ("2", "задний"),
        ("3", "4х4")
    )

    CAR_TYPE = (
        ('1', 'минивен'),
        ('2', "универсал"),
        ("3", "минивен"),
        ("4", "купе"),
        ("5", "внедорожник"),
        ("6", "кабриолет"),
        ("7", "пикап")
    )

    CAR_COLOR = (
        ('1', 'черный'),
        ('2', 'красный'),
        ('3', 'белый'),
        ('4', 'синий'),
        ('5', 'зеленый')
    )

    name = models.CharField(max_length=30, null=True, blank=True)
    car_type = models.CharField(
        max_length=30, help_text='тип кузова', null=True, choices=CAR_TYPE)
    price = models.IntegerField(null=True)
    kilometrage = models.IntegerField(null=True, help_text="пробег")
    color = models.CharField(max_length=30, null=True, choices=CAR_COLOR)
    gear_case = models.CharField(
        help_text='коробка передач', max_length=8, choices=GEAR_CASE, default="механика")
    engine = models.CharField(max_length=30, null=True,
                              help_text="характеристики двигателя")
    gear = models.CharField(help_text="Привод", max_length=8,
                            choices=GEAR, null=True, default="передний")
    owner_count = models.IntegerField(null=True)
    description = models.TextField(null=True,  blank=True)
    owner = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True)
    img = models.ImageField(upload_to='images/', default='')
    client_name = models.TextField(null=True, blank=False)
    client_phone = models.TextField(null=True, blank=False)
    client_email = models.TextField(null=True, blank=False)
    status = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class Dock(models.Model):
    PTS = models.CharField(max_length=30, help_text='ПТС',
                           null=True, default='оригинал')
    Vin = models.CharField(max_length=30,
                           help_text="Идентификационный номер транспортного средства", null=True)
    state_number = models.CharField(
        help_text='гос номер', null=True, max_length=20)
    insurance = models.BooleanField('Cтраховка', default=False)
    car = models.OneToOneField(
        Person_auto, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.PTS


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    car = models.ForeignKey(Person_auto, on_delete=models.CASCADE, null=True)
    comment = models.TextField(max_length=2000, null=True)
    date = models.DateField(auto_now=True)

    def __str__(self):
        return self.comment
