# Use the optimized nginx-spa image
FROM steebchen/nginx-spa:latest

# Copy the built files from the React app into the Nginx public directory. 
# The nginx-spa image uses /app as its root directory for the app.
COPY build/ /app
