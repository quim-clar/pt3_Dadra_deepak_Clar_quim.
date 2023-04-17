<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version = "1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="//nombre">
<html>

<body>
    <h1>RECEPTA</h1>
    <h2><xsl:value-of select="."/></h2>
</body>

</html>
    </xsl:template>
</xsl:stylesheet>