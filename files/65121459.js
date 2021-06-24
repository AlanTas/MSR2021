library(shiny)
ui <- fluidPage(
    flowLayout(
        mainPanel(
           tableOutput("testTable")
        )
    )
)
server <- function(input, output) {
    dat <- data.frame(a = c(1,2,3),b = c(4,5,6),c = c(7,8,9))
    colnames(dat) <- c("","","")
    output$testTable <- renderTable(dat, colnames = FALSE, bordered = TRUE)
}
shinyApp(ui = ui, server = server)
