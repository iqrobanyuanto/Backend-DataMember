const { DefaultAzureCredential } = require('@azure/identity');
const { BlobServiceClient } = require('@azure/storage-blob');

const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME;
if (!accountName) throw Error('Azure Storage accountName not found');

const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  new DefaultAzureCredential()
);

const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME;
const profileContainer = blobServiceClient.getContainerClient(containerName);

exports.updater = async (req, res) => {
    try{
        const memberId = req.params.memberId;
        const img = req.file;
        const blobName = `profile_${memberId}.jpg`;
        const blockBlobClient = profileContainer.getBlockBlobClient(blobName);
        await blockBlobClient.upload(img.buffer, img.size);

        res.status(200).json({response: 'Image uploaded successfully', imageUrl: blockBlobClient.url});

    }catch(err){
        res.status(500).json({response: err.message});
    }
};

exports.getter = async (req, res) => {
    try{
        const memberId = req.params.memberId;
        const blobName = `profile_${memberId}.jpg`;
        const blockBlobClient = profileContainer.getBlockBlobClient(blobName);
        res.status(200).send({imageUrl: blockBlobClient.url});

    }catch(err){
        res.status(500).json({response: err.message});
    }
};