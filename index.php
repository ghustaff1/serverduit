<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uploaded Images</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Uploaded Images</h1>
    <div class="gallery">
        <?php
        $dir = '/var/www/html/images/';
        $files = scandir($dir);
        foreach ($files as $file) {
            if ($file !== '.' && $file !== '..') {
                echo "<img src='images/$file' width='300'>";
            }
        }
        ?>
    </div>
    <form action="upload.php" method="post" enctype="multipart/form-data">
        Select image to upload:
        <input type="file" name="file" id="file">
        <input type="submit" value="Upload Image" name="submit">
    </form>

    <script src="script.js"></script>
</body>
</html>

