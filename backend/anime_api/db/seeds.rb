# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'nokogiri'
require 'open-uri'
require 'pry'

page = 12
array_of_anime_links = []
while page != 13
    doc = Nokogiri::HTML(URI.open("https://www.anime-planet.com/anime/all?page=" + page.to_s))
    doc2 = doc.css("ul.cardDeck.cardGrid").children
    doc2.each do |card|
        if card.css("a").attribute("href")
            # binding.pry
            hash = {
                :profile => card.css("a").attribute("href").value.prepend("https://www.anime-planet.com")
            }
            array_of_anime_links << hash
        end
    end
    page += 1
end 
# binding.pry
# array_of_anime_links.shift

array_of_anime_links.map do |card|
    profile = Nokogiri::HTML(URI.open(card[:profile]))
    title = profile.css("h1").text
    summary = profile.css(".entrySynopsis").css("p").text
    cover = profile.css("img.screenshots").attribute("src").value.prepend("https://www.anime-planet.com")
    # binding.pry
    tags = profile.css("div.tags").css("ul").text.strip.split("\n\n\n\n\n").map{|e| e.gsub(/[,]/, "")}.map{|e| e.strip}.join(", ")
    Anime.create(title: title, summary: summary, cover: cover, tags: tags)
end