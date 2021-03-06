require 'nokogiri'
require 'open-uri'
require 'pry'

page = 1
array_of_anime_links = []
while page != 2
    doc = Nokogiri::HTML(URI.open("https://www.anime-planet.com/anime/all?page=" + page.to_s))
    doc2 = doc.css("ul.cardDeck.cardGrid").children
    doc2.each do |card|
        if card.css("a").attribute("href")
            hash = {
                :profile => card.css("a").attribute("href").value.prepend("https://www.anime-planet.com")
            }
            array_of_anime_links << hash
        end
    end
    page += 1
end 

array_of_anime_links.map do |card|
    profile = Nokogiri::HTML(URI.open(card[:profile]))
    title = profile.css("h1").text
    summary = profile.css(".entrySynopsis").css("p").text
    cover = profile.css("img.screenshots").attribute("src").value.prepend("https://www.anime-planet.com")
    tags_and_content_warnings = profile.css("div.tags").css("ul").text.strip.split("\n\n\n\n\n").map{|e| e.gsub(/[,]/, "")}.map{|e| e.strip}.join(", ")
    
    array_of_comments = profile.css("a.ShortReview").children.text.split("\n\n\n\n\n\n")
    array_of_comments.each do |comment|
        comment_array = comment.strip.split("\n")
        user = comment_array[0]
        comment_array.delete_if {|ele| ele.length < 14}
        comment_array = comment_array.join(" ")
        binding.pry

    end
end