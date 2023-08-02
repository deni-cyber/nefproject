from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from homeapp.models import Project, Service, Product

def home_view(request):
    services = Service.objects.all()
    context = {'projects': services}
    return render(request, 'homeapp/home.html', context)

def about_view(request):
    services=Service.objects.all()
    products=Product.objects.all()
    template = loader.get_template('homeapp/about.html')
    context = {'services':services,'products':products}
    return HttpResponse(template.render(context, request))
    
def projects_view(request):
    projects = Project.objects.all()
    context = {'projects': projects}
    return render(request, 'homeapp/projects.html', context)


def contact_view(request):
    
    template = loader.get_template('homeapp/contact.html')
    context = {}
    return HttpResponse(template.render(context, request))
