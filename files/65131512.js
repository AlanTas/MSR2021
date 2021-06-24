        PrintWriter out = response.getWriter();
        response.setContentType("text/html");

        out.println("<html><body>");  
        out.println("<script type=\"text/javascript\">");  
        if(status.equals("Fail")) {
            out.println("alert('Import Failed !');");  
        }else {
            out.println("alert('Import Sucessfull !');");  
        }
        out.println("location.href = \"" + request.getContextPath() + "\";");
        out.println("</script>");
        out.println("</body></html>");
        out.flush();
