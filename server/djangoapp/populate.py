from .models import CarMake, CarModel


def initiate():
    car_make_data = [
        {"name": "NISSAN", "description": "Great cars. Japanese technology"},
        {"name": "Mercedes", "description": "You can't get any better luxury"},
        {"name": "BMW", "description": "Drive at its best"},
        {"name": "Toyota", "description": "Reliable and durable vehicles"},
        {"name": "Honda", "description": "Efficient and dependable cars"},
        {"name": "Ford", "description": "Built Ford Tough American excellence"},
        {"name": "Audi", "description": "Vorsprung durch Technik"},
    ]

    car_make_instances = []
    for data in car_make_data:
        car_make, created = CarMake.objects.get_or_create(
            name=data['name'],
            defaults={'description': data['description']}
        )
        car_make_instances.append(car_make)

    car_model_data = [
        {"name": "Pathfinder", "type": "SUV", "year": 2023, "car_make": car_make_instances[0]},
        {"name": "Qashqai", "type": "SUV", "year": 2023, "car_make": car_make_instances[0]},
        {"name": "Altima", "type": "SEDAN", "year": 2023, "car_make": car_make_instances[0]},
        {"name": "C-Class", "type": "SEDAN", "year": 2023, "car_make": car_make_instances[1]},
        {"name": "E-Class", "type": "SEDAN", "year": 2023, "car_make": car_make_instances[1]},
        {"name": "GLC", "type": "SUV", "year": 2023, "car_make": car_make_instances[1]},
        {"name": "3 Series", "type": "SEDAN", "year": 2023, "car_make": car_make_instances[2]},
        {"name": "5 Series", "type": "SEDAN", "year": 2023, "car_make": car_make_instances[2]},
        {"name": "X5", "type": "SUV", "year": 2023, "car_make": car_make_instances[2]},
        {"name": "Corolla", "type": "SEDAN", "year": 2023, "car_make": car_make_instances[3]},
        {"name": "Camry", "type": "SEDAN", "year": 2023, "car_make": car_make_instances[3]},
        {"name": "RAV4", "type": "SUV", "year": 2023, "car_make": car_make_instances[3]},
        {"name": "Civic", "type": "SEDAN", "year": 2023, "car_make": car_make_instances[4]},
        {"name": "Accord", "type": "SEDAN", "year": 2023, "car_make": car_make_instances[4]},
        {"name": "CR-V", "type": "SUV", "year": 2023, "car_make": car_make_instances[4]},
        {"name": "Explorer", "type": "SUV", "year": 2023, "car_make": car_make_instances[5]},
        {"name": "Mustang", "type": "COUPE", "year": 2023, "car_make": car_make_instances[5]},
        {"name": "A4", "type": "SEDAN", "year": 2023, "car_make": car_make_instances[6]},
        {"name": "Q5", "type": "SUV", "year": 2023, "car_make": car_make_instances[6]},
    ]

    for data in car_model_data:
        CarModel.objects.get_or_create(
            name=data['name'],
            car_make=data['car_make'],
            type=data['type'],
            year=data['year']
        )

    print("CarMake and CarModel database records populated successfully.")
