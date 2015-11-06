class MapsController < ApplicationController


  # def update
  #     render: nothing => true
  #     # client-side makes an ajax request to get this
  #
  #     @test = {what: "is up"}
  #     render json: @test
  #
  #     # binding.pry
  # end

  def show
    seed_points = [
      {lat: 40.748701, lng: -74.004180},
      {lat: 40.752124, lng: -74.001958},
      {lat: 40.750396, lng: -74.002958},
      {lat: 40.745060, lng: -74.006745},
      {lat: 40.745512, lng: -74.006467},
      {lat: 40.747873, lng: -74.004757},
      {lat: 40.744781, lng: -74.006916},
      {lat: 40.753461, lng: -74.002937},
      {lat: 40.753694, lng: -74.004647},
      {lat: 40.754513, lng: -74.005923},
      {lat: 40.756382, lng: -74.004657},
      {lat: 40.755960, lng: -74.002769}
    ]

      @ig_data = []

      # timeout function in ruby exists, look that up
      # use timeout to update this call repeatedly
      # go do FOREVER
      # on update, reset @ig_data, and then rerender the markers

    seed_points.each do |point|
      puts "found a point!"
      endpoint = "https://api.instagram.com/v1/media/search?lat="+point[:lat].to_s+"&lng="+point[:lng].to_s+"&count=33&distance=100&client_id=62b689a145a94aa2863cec35efc57e12"
      buffer = open(endpoint, "User-Agent" => "ruby").read
      result = JSON.parse(buffer)

      @ig_data.push(result['data'])
    end

    gon.data = @ig_data

  end

end
