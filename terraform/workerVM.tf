resource "azurerm_linux_virtual_machine" "worker-vm" {
  name                = "worker-vm"
  resource_group_name =var.resource_group_name
  location            =var.location
  size                = "Standard_DS1_v2"
  admin_username      = "ubuntu"
  network_interface_ids = [
    azurerm_network_interface.worker-nw-interface.id,
  ]


  admin_ssh_key {
    username   = "ubuntu"
    public_key = file("~/.ssh/id_rsa.pub")

  }

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Standard_LRS"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "UbuntuServer"
    sku       = "18.04-LTS"
    version   = "latest"
  }
}
