class Api::FollowsController < ApplicationController

    # before_action :require_logged_in

    def index
        @canFollowUsers = current_user.unfollowed_users 
        #array of users you can follow
        render 'api/follows/index'
    end

    def create
        @follow = Follow.new()
        @follow.follower_id = current_user.id
        @follow.followed_id = params[:followedUserId]

        if @follow.save
            render 'api/follows/show'
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @follow = Follow.find(params[:id])
        @follow.destroy!
        render 'api/follows/show'
    end

end