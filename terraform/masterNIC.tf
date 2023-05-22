resource "azurerm_network_interface" "master-nw-interface" {
  name                = "master-nic"
  location            = var.location
  resource_group_name = var.resource_group_name
  

  ip_configuration {
    name                          = "master-internal"
    subnet_id                     = azurerm_subnet.az_subnet.id
    private_ip_address_allocation = "Dynamic"
     public_ip_address_id          = azurerm_public_ip.master-pip.id

 
  }
}

resource "azurerm_network_interface_security_group_association" "masternsga" {
  network_interface_id = azurerm_network_interface.master-nw-interface.id
  network_security_group_id = azurerm_network_security_group.nsg.id
  
}
resource "azurerm_public_ip" "master-pip" {
  name                = "master-publicip"
  location            = var.location
  resource_group_name = var.resource_group_name
  allocation_method   = "Static"
  
}

resource "azurerm_network_security_group" "nsg" {
  name                = "acceptanceTestSecurityGroup1"
  location            = var.location
  resource_group_name = var.resource_group_name

  security_rule {
    name                       = "allow-all"
    priority                   = 100
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "*"
    source_port_range          = "*"
    destination_port_range     = "*"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }

}
