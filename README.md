[https://dyatesupnorth.github.io/open-pharmacy/] for live demo
# Help me open a pharmacy

## Task

Write code that helps Well open a new pharmacy in Greater Manchester and make loads of money.

```
AS A
    Pharmacist
WHEN I
    Am looking to open a new Pharmacy in Greater Manchester
I WANT
    To know where there are a lot of surgeries
SO THAT
    I can make more money.
```

I'd like to see:

- A historgram of the number of surgeries by Outward Code, e.g.:
  - M12: 3 (7.5%)
  - M21: 10 (25%)
  - M4: 5 (12.5%)
  - M15: 3 (7.5%)
  - M1: 5 (12.5%)
- Additional requirement may be to show the top 5 zones.

The outward code is the first part of the postcode before the space, e.g. if you take `M12 6BN`, `M12` is the outward code.

This is the list of postcodes in the Greater Manchester area:
![gm](./gm.png)

Use any programming language you like. Web/mobile application or console application is fine.

The dataset is in the file `data.json`.

Sample data:

```json
{
  "date": "2019-01-17T09:13:00.016Z",
  "list": [
    {
      "name": "HMP MANCHESTER (HIGH SECURITY)",
      "addressLine1": "SOUTHALL STREET",
      "addressLine2": "",
      "city": "MANCHESTER",
      "postcode": "M60 9AH",
      "phone": "0161 8175600"
    },
    {
      "name": "OLDHAM 7 DAY ACCESS HUB3 OOH",
      "addressLine1": "FAILSWORTH HEALTH CENTRE",
      "addressLine2": "ASHTON RD WEST,FAILSWORTH",
      "city": "MANCHESTER",
      "postcode": "M35 0AD",
      "phone": "0161 6811401"
    },
    {
      "name": "NL COMMUNITY RESPIRATORY SERVICE",
      "addressLine1": "BOC RESPIRATORY SERVICES",
      "addressLine2": "PRIESTLEY ROAD",
      "city": "WORSLEY",
      "postcode": "M28 2UT",
      "phone": "0800 0121858"
    }
  ]
}
```
