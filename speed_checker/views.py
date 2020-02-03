from django.shortcuts import render
import pokebase as pb
from django.views import generic
import random
import datetime

# Create your views here.

class IndexView(generic.TemplateView):
    template_name = 'speed_checker/pokedex.html'
    index = random.randint(1, 808)

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        self.index = random.randint(1, 808)
        pokemon = pb.pokemon(self.index)
        context['pokemon'] = pokemon
        individual_range = range(0, 31)
        context['individual_range'] = individual_range
        effort_range = range(0, 252, 4)
        context['effort_range'] = effort_range
        return context