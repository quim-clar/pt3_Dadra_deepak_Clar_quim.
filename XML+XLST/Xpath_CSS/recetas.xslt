<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <xsl:apply-templates/>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="recepe">
    <div>
      <h2><xsl:value-of select="title"/></h2>
      <img src="{image/@src}" alt="{image/@alt}" />
      <ul>
        <li><strong>Ingredientes:</strong></li>
        <xsl:apply-templates select="ingredients"/>
        <li><strong>Tiempo:</strong></li>
        <xsl:apply-templates select="times"/>
        <li><strong>Pasos:</strong></li>
        <xsl:apply-templates select="steps"/>
      </ul>
    </div>
  </xsl:template>

  <xsl:template match="ingredients">
    <ul>
      <xsl:apply-templates select="ingredient"/>
    </ul>
  </xsl:template>

  <xsl:template match="ingredient">
    <li><xsl:value-of select="."/></li>
  </xsl:template>

  <xsl:template match="times">
    <ul>
      <xsl:apply-templates select="time"/>
    </ul>
  </xsl:template>

  <xsl:template match="time">
    <li><xsl:value-of select="."/></li>
  </xsl:template>

  <xsl:template match="steps">
    <ol>
      <xsl:apply-templates select="step"/>
    </ol>
  </xsl:template>

  <xsl:template match="step">
    <li><xsl:value-of select="."/></li>
  </xsl:template>

</xsl:stylesheet>
