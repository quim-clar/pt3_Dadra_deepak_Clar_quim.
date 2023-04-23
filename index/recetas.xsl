<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
 <html>
 <body>
  <h2>LISTA DE RECETAS</h2>
  <table border="1">
     <tr bgcolor="#9acd32">
       <th style="text-align:left">Titulo</th>
       <th style="text-align :left">Ingredientes</th>
       <th style="text-align :left">Tiempo</th>
       <th style="text-align :left">Pasos</th>
    </tr>
    <xsl:for-each select="recepes/recepe">
     <tr>
      <td><xsl:value-of select="title" /></td>
      <td><xsl:value-of select="ingredients" /></td>
      <td><xsl:value-of select="times" /></td>
      <td><xsl:value-of select="steps" /></td>
    </tr>
    </xsl:for-each>
  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>