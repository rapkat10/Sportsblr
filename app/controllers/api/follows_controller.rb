class Api::FollowsController < ApplicationController

    def followedFilterPosts
        following_ids = current_user.getfollowingIds(current_user)
        Post.where(user_id: current_user.id)
            .or(Post.where(:user_id => following_ids)).order(id: :DESC)
    end

    def index
        @canFollowUsers = current_user.unfollowed_users 
        render 'api/follows/index'
    end

    def create
        follow = Follow.new()
        follow.follower_id = current_user.id
        follow.followed_id = params[:followedUserId]
        
        if follow.save
            @posts = followedFilterPosts
            render 'api/posts/index'
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        follow = Follow.find(params[:id])
        follow.destroy!
        @posts = followedFilterPosts
        render 'api/posts/index'
    end

end