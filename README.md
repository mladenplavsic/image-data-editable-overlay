# Image data editable overlay

Easy configurable, allows you to fill-in forms by adding dynamic data over static images. Data input is done via text form. 

## Configuration

Placement and output can be configured using config.json

```
{
    "fields": [
        {
            "id": "name",
            "default": "John"
        },
        {
            "id": "surname",
            "default": "Smith"
        },
        {
            "id": "id_number",
            "default": "1234567890123"
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
                    "value": "data.id_number",
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