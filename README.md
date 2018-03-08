# weather-app 
A terminal  based weather app which use google api and dark sky api to fetch weather.
first install all dependencies by-npm install

## examples of request:
### Example 1
```
node app.js -a "indore"
```
#### Output
```
formatted address :Indore, Madhya Pradesh, India
latitude :22.7195687
longitude :75.8577258
weather summary :Clear
wind address :6.56 KM/hr
humidity :0.42
temperature :20.883333333333336 °C 
```


### Example 2
```
node app.js -a "New York"
```
#### Output
#### 
````
formatted address :New York, NY, USA
latitude :40.7127753
longitude :-74.0059728
weather summary :Partly Cloudy
wind address :11.24 KM/hr
humidity :0.61
temperature :3.6777777777777767 °C
````


### Example 3
```
node app.js -a ""
```

#### Output

```
invalid address or address not filled
```
