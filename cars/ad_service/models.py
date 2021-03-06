from django.db import models
from django.contrib.auth.models import User

# Create your models here.


"""class Company(models.Model):
    login = models.CharField(max_length=10, unique=True)
    password = models.CharField(max_length=30)

    def __str__(self):
        return self.login"""


class Service_info(models.Model):
    owner = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=30, blank=True)
    location = models.CharField(max_length=30, blank=True)
    phone = models.CharField(blank=True, null=True, max_length=15)
    email = models.EmailField(blank=True, null=True)
   # company = models.ForeignKey(Company, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name


class Service_auto(models.Model):

    GEAR_CASE = (
        ("автомат", "автомат"),
        ("механика", "механика"),
    )

    GEAR = (
        ("передний", "передний"),
        ("задний", "задний"),
        ("4х4", "4х4")
    )

    CAR_TYPE = (
        ('минивен', 'минивен'),
        ('универсал', "универсал"),
        ("минивен", "хэтчбек"),
        ("купе", "купе"),
        ("внедорожник", "внедорожник"),
        ("кабриолет", "кабриолет"),
        ("пикап", "пикап")
    )

    name = models.CharField(max_length=30, null=True, blank=True)
    car_type = models.CharField(
        max_length=30, help_text='тип кузова', null=True, choices=CAR_TYPE)
    price = models.IntegerField(null=True)
    color = models.CharField(max_length=30, null=True, blank=True)
    gear_case = models.CharField(
        help_text='коробка передач', max_length=8, choices=GEAR_CASE, default="механика")
    engine = models.CharField(max_length=30, null=True,
                              help_text="характеристики двигателя")
    gear = models.CharField(help_text="Привод", max_length=8,
                            choices=GEAR, null=True, default="передний")
    comments = models.TextField(null=True,  blank=True)
    service = models.ForeignKey(
        Service_info, on_delete=models.CASCADE, null=True)
    image = models.ImageField(upload_to='images/', default=' ' )

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    time_visit = models.DateField(
        'Дата вашего визита в салон для просмотра автомобиля')
    phone = models.CharField(max_length=12, null=True)
    text = models.TextField(max_length=1000, help_text='Дополнительная информация. Пожелания',
                            default='Планирую посетить Ваш салон в указанное выше время. Прошу подготовить выбранную машину для тест драйва.')
    auto = models.OneToOneField(
        Service_auto, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.phone


class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    service = models.ForeignKey(
        Service_info, on_delete=models.CASCADE, null=True)
    text = models.TextField(help_text='Текст письма', null=True, max_length=2000)
    
    def __str__(self):
        return self.text