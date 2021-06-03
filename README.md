# Weeb Out

![Alt text](frontend/src/images/weebbanner.png?raw=true "Weeb Out Banner")

Finding the next anime to watch can be hard, but it doesn't have to be.
Let the anime community help by reading their reviews!

![Alt text](frontend/src/images/choosing.gif?raw=true "Home Page")

Simply click on the anime card that appeals to you and then read the comments.

![Alt text](frontend/src/images/first.gif?raw=true "Choosing Anime")

### Prerequisites & Installing

First, clone this repo:

```
git clone <link to this repo>
```

The backend of this single page application runs on a Rails API. Move down to the anime_api directory.
I do not recommend dropping the database as it was done with scraping and due to HTTP request limit, it has to be done page by page. However, the seeds.rb file will allow you to scrape more anime if needed.

```
cd backend/anime_api
```

Then run:
```
bundle install
```

Run the API with:
```
rails s
```

On a separate terminal, cd to frontend, then run:
```
npm install
```

```
npm start
```

## Author
 - [Eva Yi Zheng](https://github.com/yizheng1709)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code
of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the [CC0 1.0 Universal](LICENSE.md)
Creative Commons License - see the [LICENSE.md](LICENSE.md) file for details


