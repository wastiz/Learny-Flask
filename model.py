from dataclasses import dataclass
from typing import List
from app import db

@dataclass
class Company:
  name: str
  country: str

@dataclass
class Product:
  title: str
  price: float
  producer: Company