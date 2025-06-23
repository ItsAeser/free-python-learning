const lessons = [
  {
    description: "Lesson 1: Intro to print()",
    example: "print('Hello, world!')",
    project: "print('Welcome to Python!')"
  },
  {
    description: "Lesson 2: Variables",
    example: "name = 'Alice'",
    project: "name = 'YourName'\nprint(name)"
  },
  {
    description: "Lesson 3: Numbers",
    example: "a = 5\nb = 2.5\nprint(a + b)",
    project: "x = 7\ny = 3\nprint(x * y)"
  },
  {
    description: "Lesson 4: Strings",
    example: "'Hello' + ' World'",
    project: "greeting = 'Hi'\nname = 'Sam'\nprint(greeting + ' ' + name)"
  },
  {
    description: "Lesson 5: Input",
    example: "name = input('Enter your name: ')\nprint(name)",
    project: "color = input('Favorite color: ')\nprint('You like', color)"
  },
  {
    description: "Lesson 6: Booleans",
    example: "is_happy = True\nprint(is_happy)",
    project: "is_coding = False\nprint('Coding:', is_coding)"
  },
  {
    description: "Lesson 7: If Statements",
    example: "if 10 > 5:\n  print('True')",
    project: "score = 90\nif score > 80:\n  print('Great job!')"
  },
  {
    description: "Lesson 8: Else & Elif",
    example: "temp = 25\nif temp > 30:\n  print('Hot')\nelif temp > 20:\n  print('Warm')\nelse:\n  print('Cold')",
    project: "age = 17\nif age >= 18:\n  print('Adult')\nelse:\n  print('Minor')"
  },
  {
    description: "Lesson 9: Lists",
    example: "fruits = ['apple', 'banana']\nprint(fruits[0])",
    project: "colors = ['red', 'green', 'blue']\nprint(colors[2])"
  },
  {
    description: "Lesson 10: Loops",
    example: "for i in range(3):\n  print(i)",
    project: "for color in ['red', 'blue']:\n  print(color)"
  },
  {
    description: "Lesson 11: While Loops",
    example: "x = 0\nwhile x < 3:\n  print(x)\n  x += 1",
    project: "count = 1\nwhile count <= 5:\n  print(count)\n  count += 1"
  },
  {
    description: "Lesson 12: Functions",
    example: "def greet():\n  print('Hi')\ngreet()",
    project: "def say_hello():\n  print('Hello!')\nsay_hello()"
  },
  {
    description: "Lesson 13: Parameters",
    example: "def add(a, b):\n  return a + b",
    project: "def multiply(x, y):\n  print(x * y)\nmultiply(2, 3)"
  },
  {
    description: "Lesson 14: Return Values",
    example: "def square(n):\n  return n * n",
    project: "def cube(n):\n  return n ** 3\nprint(cube(2))"
  },
  {
    description: "Lesson 15: Dictionaries",
    example: "person = {'name': 'Sam'}\nprint(person['name'])",
    project: "car = {'make': 'Toyota', 'year': 2022}\nprint(car['make'])"
  },
  {
    description: "Lesson 16: Nesting",
    example: "user = {'profile': {'age': 20}}\nprint(user['profile']['age'])",
    project: "school = {'class': {'students': 30}}\nprint(school['class']['students'])"
  },
  {
    description: "Lesson 17: List of Dicts",
    example: "people = [{'name': 'A'}, {'name': 'B'}]\nprint(people[1]['name'])",
    project: "books = [{'title': 'X'}, {'title': 'Y'}]\nprint(books[0]['title'])"
  },
  {
    description: "Lesson 18: Importing Modules",
    example: "import math\nprint(math.sqrt(16))",
    project: "import random\nprint(random.randint(1, 5))"
  },
  {
    description: "Lesson 19: Random",
    example: "from random import choice\nprint(choice(['a', 'b']))",
    project: "import random\nprint(random.choice(['red', 'green']))"
  },
  {
    description: "Lesson 20: Try/Except",
    example: "try:\n  x = int('a')\nexcept:\n  print('Error')",
    project: "try:\n  print(10 / 0)\nexcept:\n  print('Cannot divide by zero')"
  },
  {
    description: "Lesson 21: Classes",
    example: "class Dog:\n  def bark(self):\n    print('Woof')",
    project: "class Cat:\n  def meow(self):\n    print('Meow')\nc = Cat()\nc.meow()"
  },
  {
    description: "Lesson 22: __init__ Method",
    example: "class Car:\n  def __init__(self, brand):\n    self.brand = brand",
    project: "class Player:\n  def __init__(self, name):\n    self.name = name\np = Player('Sam')\nprint(p.name)"
  },
  {
    description: "Lesson 23: Inheritance",
    example: "class A:\n  def greet(self):\n    print('Hi')\nclass B(A):\n  pass",
    project: "class Parent:\n  def work(self):\n    print('Working')\nclass Child(Parent):\n  pass\nc = Child()\nc.work()"
  },
  {
    description: "Lesson 24: File I/O",
    example: "with open('data.txt', 'w') as f:\n  f.write('Hello')",
    project: "# Cannot run in browser:\nprint('Imagine writing to file')"
  },
  {
    description: "Lesson 25: Final Project",
    example: "# Combine what you learned!",
    project: "name = input('Your name: ')\nprint('Good job,', name + '!')"
  }
];
