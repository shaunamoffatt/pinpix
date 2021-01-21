class TestsController < ApplicationController
   skip_before_action :authenticate_request

   def create
      render json: {output: "glarb"}
    end
 end