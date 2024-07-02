from django.db import models

class Cliente(models.Model):
    full_name = models.CharField(max_length=100, unique=True)
    birth_date = models.DateField()
    email = models.EmailField()

    def __str__(self) -> str:
        return self.full_name

    class Meta:
        db_table = 'cliente'
        
        
class Consulta(models.Model):
    full_name = models.CharField(max_length=100, unique=True)
    birth_date = models.DateField()
    email = models.EmailField()    
    # customer = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    description = models.CharField(max_length=100, unique=True)
    health_insurance_type = models.CharField(max_length=20)
    creation_date = models.DateField(auto_now=True)

    def __str__(self) -> str:
        return self.full_name

    class Meta:
        db_table = 'consulta'