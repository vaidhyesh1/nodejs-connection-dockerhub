# Express js server on docker

Template for Express js server on docker. A Sample express js server packaged as a docker image.

## Installation
Make sure to have installed docker in your machine and navigate to this folder structure before starting to use the application


## Usage
You can expose the app in your machine by running

```bash
cd build/
docker compose up -d
```
By default the application is exposed on port 8080 and exposes two api endpoints: / and /database

## Stopping the application

Use the command below in the build directory to stop the docker containers

```bash
docker compose down
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
