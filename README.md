# NewsMuzzler
***NewsMuzzler*** is an example of a third-party application built on the Prifina platform that will be able to give the user some form of privacy with their data. 

In the case of NewsMuzzler, this is done by creating anonymous emails that will be used to receive email newsletters that the user does not want to be linked to their actual email accounts. Therefore, the goal of this application is to make it as simple as possible to create new anonymous emails and read the resulting newsletters in a way that is well formatted for reading. It can also serve as a centralized hub for the user's newsletters, making it easier for the user to access their subscriptions and remove newsletters that they no longer are interested in.

As of time of development the back-end necessary has not been fully developed, so this is solely an example application with usable UI, not a fully functional project. This is also an early prototype, so there will be more work done on making the application look better and have more helpful features. 

## Data Format
- Content Card

    The card in the red box of Fig. 1-1 is the Content Card. The attributes of the data in the content card is illustrated in the Table 1-1.
    
    ![Content Card]()

    |    Fields   |    Format   | Description |   Example   |
    | ----------- | ----------- | ----------- | ----------- |
    |   imageUrl  |    String   | The URL to the image which will be displayed in the card of the content page. | “https://www.w3schools.com/howto/img_forest.jpg” |
    |   imageAlt  |    String   | An alternate text for an image, if this image cannot be displayed. | “The Image of a Forest” |
    |    title    |    String   | The title of the article/email. | “How to be a travel nomad” |
    |   subtitle  |    String   | The subtitle of the article/email. | “Luke Thomas in Intrepid Travel” |
    |publishedDate|    String   | The published date of that article. “Month Date, Year” | “Apr 30, 2020” |
    |  timeToRead |    String   | How many minutes it will take for a user to read this article. This value should be based on the number of words in that article. Generally the read speed is 200 words per minute. | “5” |
    |contentPreview|   String   | The first 100 words of the main body of the article. | “Navigating the travel landscape as a nomad. If the only reason you want to become a digital nomad is to travel, a one year trip as a...” |

- Recommended Content Card

    The card in the red box of Fig. 2-1 below is the Recommended Content Card. The attributes of the data in the content card is illustrated in the Table 2-1.

    ![Recommended Content Card]()

    |    Fields   |    Format   | Description |   Example   |
    | ----------- | ----------- | ----------- | ----------- |
    |   imageUrl  |    String   | The URL to the image which will be displayed in the card of the content page. | “https://www.w3schools.com/howto/img_forest.jpg” |
    |   imageAlt  |    String   | An alternate text for an image, if this image cannot be displayed. | “The Image of a Forest” |
    |    title    |    String   | The title of the article/email. | “How to be a travel nomad” |
    |   subtitle  |    String   | The subtitle of the article/email. | “Luke Thomas in Intrepid Travel” |
    |publishedDate|    String   | The published date of that article. “Month Date, Year” | “Apr 30, 2020” |
