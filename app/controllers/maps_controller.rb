class MapsController < ApplicationController


  def show
    endpoint = "https://api.instagram.com/v1/locations/search?lat=40.7410986&lng=-73.9888682&client_id=62b689a145a94aa2863cec35efc57e12"
    buffer = open(endpoint, "User-Agent" => "ruby").read
    result = JSON.parse(buffer)

    @ig_data = result['data']

    binding.pry
    # just do "open(url){
    #
    # }"

  end

end

# // // get location id
# // // https://api.instagram.com/v1/locations/search?lat=1&lng=2&access_token=Your-Act
# // var query_string = 'https://api.instagram.com/v1/locations/search?lat=40.7410986&lng=-73.9888682&client_id=62b689a145a94aa2863cec35efc57e12'
# // var next_max_id  = 1111879330113488870
# // var loc_string   = 'https://api.instagram.com/v1/locations/127540101/media/recent?client_id=62b689a145a94aa2863cec35efc57e12'


# open("https://api.instagram.com/v1/locations/search?lat=40.7410986&lng=-73.9888682&client_id=62b689a145a94aa2863cec35efc57e12", "User-Agent" => "ruby") {|f|
#     f.each_line {|line| p line}
#     # p f.base_uri         # <URI::HTTP:0x40e6ef2 URL:http://www.ruby-lang.org/en/>
#     # p f.content_type     # "text/html"
#     # p f.charset          # "iso-8859-1"
#     # p f.content_encoding # []
#     # p f.last_modified    # Thu Dec 05 02:45:02 UTC 2002
# }
#
#
# open("https://www.ruby-lang.org/en") {|f|
#   f.each_line {|line| p line}
#
# }
