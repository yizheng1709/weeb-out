require 'uri'
require 'net/http'
require 'openssl'
require 'pry'
require 'httparty'

# url = URI("https://anilistmikilior1v1.p.rapidapi.com/getAnimeList")

# http = Net::HTTP.new(url.host, url.port)
# http.use_ssl = true
# http.verify_mode = OpenSSL::SSL::VERIFY_NONE

# request = Net::HTTP::Post.new(url)
# request["content-type"] = 'application/x-www-form-urlencoded'
# request["x-rapidapi-key"] = 'd3be911c4emsh88c6435113780e4p1dc347jsncad39a94bf6b'
# request["x-rapidapi-host"] = 'Anilistmikilior1V1.p.rapidapi.com'
# request.body = "accessToken=%3CREQUIRED%3E&userId=weebout"

# response = http.request(request)
# binding.pry
# puts response.read_body

response = HTTParty.get("https://anilistmikilior1v1.p.rapidapi.com/getAnimeList?rapidapi-key=")
binding.pry
puts response 