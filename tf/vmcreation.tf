resource "azurerm_resource_group" "example" {
  name     = var.resource_group
  location = var.location
}

resource "azurerm_virtual_network" "example" {
  name                = "my-vnet"
  address_space       = ["10.0.0.0/16"]
  location            = var.location
  resource_group_name = var.resource_group
}

resource "azurerm_subnet" "example" {
  name                 = "my-subnet"
  resource_group_name  = var.resource_group
  virtual_network_name = azurerm_virtual_network.example.name
  address_prefixes     = ["10.0.0.0/24"]
}

resource "azurerm_network_interface" "master" {
  name                = "master-nic"
  location            = var.location
  resource_group_name = var.resource_group

  ip_configuration {
    name                          = "master-ipconfig"
    subnet_id                     = azurerm_subnet.example.id
    private_ip_address_allocation = "Dynamic"
  }
}

resource "azurerm_network_interface" "worker" {
  name                = "worker-nic"
  location            =var.location
  resource_group_name =var.resource_group

  ip_configuration {
    name                          = "worker-ipconfig"
    subnet_id                     = azurerm_subnet.example.id
    private_ip_address_allocation = "Dynamic"
  }
}

resource "azurerm_linux_virtual_machine" "master" {
  name                = "master-vm"
  location            = var.location
  resource_group_name = var.resource_group
  size                = "Standard_DS1_v2"

  network_interface_ids = [azurerm_network_interface.master.id]

  admin_username = "ubuntu"
  admin_ssh_key {
    username   = "ubuntu"
    public_key = file("~/.ssh/id_rsa.pub")
  }

  tags = {
    "Role" = "master"
  }
  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "20.04-LTS"
    version   = "latest"
  }
}

resource "azurerm_linux_virtual_machine" "worker" {
  name                = "worker-vm"
  location            = var.location
  resource_group_name = var.resource_group
  size                = "Standard_DS1_v2"

  network_interface_ids = [azurerm_network_interface.worker.id]

  admin_username = "ubuntu"
  admin_ssh_key {
    username   = "ubuntu"
    public_key = file("~/.ssh/id_rsa.pub")
  }

  tags = {
    "Role" = "worker"
  }
  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "20.04-LTS"
    version   = "latest"
  }
}