resource "azurerm_network_interface" "worker-nw-interface" {
  name                = "worker-nic"
  location            = var.location
  resource_group_name = var.resource_group_name
  

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.az_subnet.id
    private_ip_address_allocation = "Dynamic"
     public_ip_address_id          = azurerm_public_ip.worker-pip.id

 
  }
}

resource "azurerm_network_interface_security_group_association" "workernsga" {
  network_interface_id = azurerm_network_interface.worker-nw-interface.id
  network_security_group_id = azurerm_network_security_group.nsg.id
  
}
resource "azurerm_public_ip" "worker-pip" {
  name                = "worker-publicip"
  location            = var.location
  resource_group_name = var.resource_group_name
  allocation_method   = "Static"
  tags                = {
    environment = "dev"
  }
}


