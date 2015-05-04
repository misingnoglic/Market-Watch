module FeedEntriesHelper

	def display_content_with_links(text)
    	text.gsub(/(http:\/\/[a-zA-Z0-9\/\.\+\-_:?&=]+)/) {|a| "<a href=\"#{a}\" target='_blank'>#{a}</a>"}
  	end
  	
end
