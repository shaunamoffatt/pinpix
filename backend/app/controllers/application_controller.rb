class ApplicationController < ActionController::API
        before_action :authenticate_request
        attr_reader :current_user

        def authenticate_request
                @current_user = AuthorizeApiRequest.call(request.headers).result
                render json: { error: 'Not Authorized' }, status: 401 unless @current_user
        end 

        def get_name
                
                render json: { name: @current_user.email }, status: 200
        end

        def test_params
                params.permit(:users_name_test)
              end
end