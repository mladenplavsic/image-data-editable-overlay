# Image data editable overlay

Easy configurable, allows you to fill-in forms by adding dynamic data over static images. Data input is done via text form. 

## Configuration

Placement and output can be configured using config.json

```
{
    "fields": [
        {
            "id": "name",
            "default": "John",
            "restrictions": {
                "minlength": 2
            }
        },
        {
            "id": "surname",
            "default": "Smith",
            "restrictions": {
                "minlength": 2
            }
        },
        {
            "id": "id_number",
            "default": "1234567890123",
            "restrictions": {
                "pattern": "\\d{5}"
            }
        },
        {
            "id": "city",
            "default": "Novi Sad"
        },
        {
            "id": "address",
            "default": "5th Avenue"
        }
    ],
    "sheets": [
        {
            "name": "Sheet One",
            "image": "sheet_one.jpg",
            "copies": 2,
            "bindings": [
                {
                    "value": "data.city",
                    "top": 278,
                    "left": 242
                },
                {
                    "value": "data.name + ' ' + data.surname",
                    "top": 404,
                    "left": 120
                },
                {
                    "value": "data.id_number | replace:'(\d{2})(\d{2})(\d{3}).*':$1.$2.1$3.",
                    "top": 404,
                    "left": 460
                },
                {
                    "value": "data.city + ', ' + data.address",
                    "top": 478,
                    "left": 120
                }
            ]
        },
        {
            "name": "Sheet Two",
            "image": "sheet_two.jpg",
            "copies": 2,
            "bindings": [
                {
                    "value": "data.name + ' ' + data.surname",
                    "top": 589,
                    "left": 120
                },
                {
                    "value": "data.city",
                    "top": 589,
                    "left": 480
                }
            ]
        }
    ]
}
```
