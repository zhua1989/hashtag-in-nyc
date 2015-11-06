class MapsController < ApplicationController

  # def push_json
  #     # client-side makes an ajax request to get this
  #
  #     @test = {what: "is up"}
  #     render json: @test
  #
  #     # binding.pry
  # end

  def show
    endpoint = "https://api.instagram.com/v1/locations/search?lat=40.7410986&lng=-73.9888682&client_id=62b689a145a94aa2863cec35efc57e12"
    buffer = open(endpoint, "User-Agent" => "ruby").read
    result = JSON.parse(buffer)

    @ig_data = result['data']

    gon.data = @ig_data
    #
    # binding.pry


  end

end
