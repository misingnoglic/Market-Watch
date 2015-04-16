class User < ActiveRecord::Base

    #after_destroy :ensure_an_admin_remains

    #private
    #def ensure_an_admin_remains
    #  if User.count.zero?
    #    raise "Can't delete last user"
    #  end
    #end

	VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
	validates :user_name, :password_digest, :email, presence: true
	validates :email, uniqueness: { case_sensitive: false }, format: {with: VALID_EMAIL_REGEX}
    #validates :password_digest, length: { in: 6..20 }

    has_secure_password
    has_many  :rules
    has_many :notifications
    has_one :portfolio


end


