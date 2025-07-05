<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" encoding="UTF-8" indent="yes"/>

	<xsl:template match="/catalog">
		<html>
			<head>
				<title>Каталог товаров</title>
			</head>
			<body>
				<h1>Товары интернет-магазина</h1>
				<table border="1">
					<tr>
						<th>ID</th>
						<th>Название</th>
						<th>Цена</th>
						<th>Описание</th>
					</tr>
					<xsl:for-each select="product">
						<tr>
							<td>
								<xsl:value-of select="id"/>
							</td>
							<td>
								<xsl:value-of select="name"/>
							</td>
							<td>
								<xsl:value-of select="price"/>
							</td>
							<td>
								<xsl:value-of select="description"/>
							</td>
						</tr>
					</xsl:for-each>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
