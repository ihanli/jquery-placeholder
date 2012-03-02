## Description
HTML5 placeholder feature made easy with this simple plugin. Just specify the "input" and the placeholder text and you are good to go. Nothing fancy or complicated, just a simple plugin.

## Usage
1) Add "jquery" before "`</head>`" tag.

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>

2) Download jquery-placeholder.js and add it in your html file before "`</head>`" tag.

    <script type="text/javascript" src="/path/to/jquery-placeholder.js"></script>

3) Fire the plugin before "`</body>`" tag.
    <script type="text/javascript">
    $('#search').placeHolder({
    	'text': 'Your Placeholder Text'
    });
    </script>

4) That's all!

## Options

*1) Placeholder Text:*

    "text": "Some Text"

*2) Normal Text Color:*

    "active": "#000"

*3) Placeholder Text Color:*

    "placeholder": "#333"

## Example
    
    <html>
    <head>
    <title>Example</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script type="text/javascript" src="/js/jquery-placeholder.js"></script>
    </head>
    
    <body>
        <form>
        	<input type="text" id="something" name="something" />
        </form>
        
        <script type="text/javascript">
    	$("#something").placeHolder({
    		"text"           : "This is the placeholder text",
    		"active"         : "#000",
    		"placeholder"    : "#333"
    	});
        </script>
    </body>
    </html>